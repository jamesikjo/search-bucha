import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//TODO: Revisit and review this handler

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  // Check if query is a string
  if (typeof query !== "string") {
    throw new Error("Invalid request");
  }
  const decodedQuery = decodeURIComponent(query);
  const firstQueryToken = decodedQuery.split(" ")[0]; // Take the first word from the search query if it contains a space

  // Perform a case-insensitive search across kombucha name, brewery name and flavor name
  const kombuchas = await prisma.kombucha.findMany({
    where: {
      OR: [
        { name: { contains: firstQueryToken, mode: "insensitive" } },
        {
          brewery: { name: { contains: firstQueryToken, mode: "insensitive" } },
        },
        {
          flavorToKombuchaConnection: {
            some: {
              flavor: {
                name: { contains: firstQueryToken, mode: "insensitive" },
              },
            },
          },
        },
      ],
    },
    include: {
      brewery: true,
      flavorToKombuchaConnection: {
        include: {
          flavor: true,
        },
        orderBy: {
          priority: "asc",
        },
      },
    },
  });

  // Transform the data to only have the 'flavor' objects
  const transformedKombuchas = kombuchas.map((kombucha) => {
    return {
      ...kombucha,
      flavorToKombuchaConnection: kombucha.flavorToKombuchaConnection.map(
        (ftk) => ftk.flavor,
      ),
    };
  });

  return NextResponse.json(transformedKombuchas);
}
