import "./projectPreviewModal.css";
import { createPortal } from "react-dom";

type Props = {
    open: boolean;
    url: string | null;
    onClose: () => void;
};

export default function ProjectPreviewModal({ open, url, onClose }: Props) {
    if (!open || !url) return null;

    return createPortal(
        <div className="ppmOverlay" onClick={onClose}>
            <div className="ppmBox" onClick={(e) => e.stopPropagation()}>
                <button className="ppmClose" onClick={onClose} aria-label="Close preview">
                    ×
                </button>

                <iframe className="ppmFrame" src={url} title="Project preview" />
            </div>
        </div>,
        document.body
    );
}