const BASE_URL = 'http://api.suppin.store/api/v1';

export const getSurvey = async (uuid: string) => {
  try {
    const res = await fetch(`${BASE_URL}/survey/view?uuid=${uuid}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
