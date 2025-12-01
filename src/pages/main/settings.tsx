import { MiniLayout } from '@/layouts'
import { ButtonWithLoader, InputWithoutIcon } from '@/components/ui'

export default function Settings() {
  return (
    <MiniLayout title="Security">
      <section className="bg-background dark:bg-secondary rounded-xl border border-line overflow-hidden">
        <div className="p-4 sm:p-6 grid grid-cols-1 gap-6">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Password updated');
            }}
          >
           
            <div className="grid grid-cols-1 gap-4">
              <InputWithoutIcon label="Current password" type="password" placeholder="••••••••" className='bg-foreground' />
              <InputWithoutIcon label="New password" type="password" placeholder="••••••••" className='bg-foreground' />
              <InputWithoutIcon label="Confirm new password" type="password" placeholder="••••••••" className='bg-foreground' />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button type="button" className="btn px-4 h-10 flex-1 text-sm font-semibold rounded-lg border border-line">Cancel</button>
              <ButtonWithLoader type='submit' className="btn btn-primary px-5 h-10 flex-1 text-sm rounded-lg" loading={false} initialText="Update password" loadingText="Updating..." />
            </div>
          </form>
        </div>
      </section>
    </MiniLayout>
  )
}