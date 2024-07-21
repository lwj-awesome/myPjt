export interface ModalProps {
  title: string;
  content: React.ReactNode;
  cancelButtonTitle: string;
  confirmButtonTitle: string;
  cancelButtonClick: () => void;
  confirmButtonClick: () => void;
}
