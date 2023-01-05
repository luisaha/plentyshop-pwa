import { ActiveShippingCountry } from './../../types';
import { Context } from '@vue-storefront/core';

export async function getActiveShippingCountries(context: Context): Promise<ActiveShippingCountry[]> {
  const url = new URL('/rest/io/active_countries', context.config.api.url);

  const { data } = await context.client.get(url.href);
  return data?.data;
}