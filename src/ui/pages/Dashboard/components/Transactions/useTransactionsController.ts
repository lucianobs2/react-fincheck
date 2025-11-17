import { useDashboard } from '../../../../components/DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return { areValuesVisible, isLoading: true };
}
