import { Logo } from '../../components/icons/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <div className="flex flex-col gap-4 h-full w-full p-4 md:px-8 md:pb-8 md:pt-6">
      <header className="flex items-center justify-between h-12">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>
      <main className="flex flex-col gap-4 flex-1 md:flex-row">
        <div className="w-full md:w-1/2">
          <Accounts />
        </div>
        <div className="w-full md:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
  );
}
