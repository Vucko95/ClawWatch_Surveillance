
export const fetchDriverStandings = async () => {
    try {
    const response = await fetch('http://localhost:8000/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
  };
