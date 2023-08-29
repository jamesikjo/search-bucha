import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Modal from "@/components/shared/modal";
import { KombuchaSearchResult, KombuchaType } from "@/types/kombucha";
import getCloudinaryUrl from "@/lib/getCloudinaryUrl";
import { ShoppingBag, ExternalLink } from "lucide-react";
import Tooltip from "@/components/shared/tooltip";
import { TypeChip } from "@/components/shared/chips";

interface KombuchaModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  kombucha: KombuchaSearchResult;
}

const KombuchaModal = ({
  showModal,
  setShowModal,
  kombucha,
}: KombuchaModalProps) => {
  const { brewery, name, type, image, flavorToKombuchaConnection } = kombucha;
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div className="w-full bg-white p-4 dark:bg-[#121212] md:max-w-lg md:rounded-2xl md:border md:border-gray-100 md:p-6 md:shadow-xl">
        <div className="mb-2 flex items-center justify-between px-4">
          <Tooltip content="Buy this Kombucha">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ShoppingBag />
            </a>
          </Tooltip>
          <div className="text-end">
            <TypeChip type={type as KombuchaType} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getCloudinaryUrl(image || "")}
            alt={`${name}-image`}
            className="h-32 w-32 md:h-40 md:w-40"
          />
          <div className="mt-6 w-full text-center">
            <div className="mb-1.5 flex items-center justify-center">
              <h3 className="text-2xl font-medium">{name}</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink
                  className="ml-2"
                  strokeWidth="2.25"
                  width="24"
                  height="24"
                />
              </a>
            </div>
            <p className="text-md">{brewery.name} Brewery</p>
            <div className="my-3 border-b-2 border-b-neutral-100" />
            {/* Full-width divider */}
            <div className="flex justify-center">
              <p className="text-sm font-medium">Flavors:&nbsp;</p>
              <span className="text-sm">
                {flavorToKombuchaConnection.map(
                  ({ name }, idx, arr) =>
                    `${name}${arr.length - 1 !== idx ? ", " : ""}`,
                )}
              </span>
            </div>
            <p className="mt-2 text-sm font-medium">Description:</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal(selectedKombucha: KombuchaSearchResult | null) {
  const [showModal, setShowModal] = useState(false);

  const KombuchaModalCallback = useCallback(() => {
    if (selectedKombucha == null) return <></>;
    return (
      <KombuchaModal
        showModal={showModal}
        setShowModal={setShowModal}
        kombucha={selectedKombucha}
      />
    );
  }, [showModal, setShowModal, selectedKombucha]);

  return useMemo(
    () => ({ setShowModal, KombuchaModal: KombuchaModalCallback }),
    [setShowModal, KombuchaModalCallback],
  );
}
