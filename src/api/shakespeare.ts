import { stripHtml } from '../helpers/utils';
import { GenericError, NetworkError } from '../type/errors';

const SHAKESPEARE_URL = "https://api.funtranslations.com/translate";

export function getShakespeareUrl(text: string) {
  return `${SHAKESPEARE_URL}/shakespeare.json?text=${encodeURI(
    stripHtml(text)
  )}`;
}

export async function getShakespeare(
  text: string,
  signal: AbortSignal
): Promise<string> {
  const response = await fetch(getShakespeareUrl(text), { signal });

  if (response.ok) {
    const data = (await response.json()) as ShakespeareEndpointReturn;
    if (data.success.total > 0) {
      return data.contents.translated;
    } else {
      throw new GenericError("Shakespeare translation not found");
    }
  }

  throw new NetworkError(
    "Shakespeare translation is not possible right now, try later"
  );
}

type ShakespeareEndpointReturn = {
  success: {
    total: number;
  };
  contents: {
    translated: string;
    text: string;
  };
};
