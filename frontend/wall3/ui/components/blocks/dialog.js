import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle,
  DialogActions,
} from "../dialog";
import Button from "../button";

function BlockDialog({
  title,
  description,
  open,
  setOpen,
  onCancel,
  onConfirm,
}) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        {title ? <div className="text-gray-200">{title}</div> : <div></div>}
        <Button plain onClick={() => setOpen(false)}>
          <svg
            className="h-6 w-6 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Close</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
      </DialogTitle>
      <DialogBody>
        <DialogDescription>{description}</DialogDescription>
      </DialogBody>
      <DialogActions>
        {onCancel && <Button onClick={onCancel}>Cancel</Button>}
        {onConfirm && <Button onClick={onConfirm}>Confirm</Button>}
      </DialogActions>
    </Dialog>
  );
}

export default BlockDialog;
