import { iconsMap } from './IconMap';

interface BankAccountTypeIconProps {
  type: keyof typeof iconsMap;
}

export function BankAccountTypeIcon({ type }: BankAccountTypeIconProps) {
  const Icon = iconsMap[type];

  return <Icon />;
}
