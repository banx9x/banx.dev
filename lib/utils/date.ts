import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

export const locale = (date: string) => {
  return format(new Date(date), 'dd MMMM yyyy', {
    locale: vi,
  });
};
