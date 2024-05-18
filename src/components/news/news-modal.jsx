'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader, DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import { useModalWindow } from 'react-modal-global'

export const NewsModal = () => {
  const modal = useModalWindow()
  const handleClose = modal.close
  return (
    <>
      <Dialog open={!modal.closed} onOpenChange={handleClose}>
        <DialogPortal>
          <DialogContent  className="w-full max-w-[654px] rounded-2xl">
            <section className="content-grid sticky top-0 z-50 bg-white">
              <div className=" flex items-center justify-between py-4 lg:py-10">
                <button onClick={handleClose}>
                  <span>Болих</span>
                </button>
              </div>
            </section>
          </DialogContent>
        </DialogPortal>
      </Dialog>

    </>
  )
}