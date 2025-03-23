import { Currencies } from '@/lib/currencies'
import {z} from 'zod'

export const UpdatedUserCurrencySchema = z.object({
    currency: z.custom(value => {
        const found = Currencies.some(c => c.value === value);
        if(!found) {
            throw new Error(`invalid currency: ${value}`);
        }

        return value;
    })

})