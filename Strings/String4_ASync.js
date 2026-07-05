//asynchronous function
/*async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
//}*/


let errorOccurred = false;
function fetchData() {
     // Simulate error condition
    setTimeout(() => {
        if (errorOccurred) {
            console.error('Error fetching data: Network response was not ok');
            return;
        }
        const data = { message: 'Data fetched successfully' };
        console.log(data);
        setTimeout(() => {
            if (errorOccurred) {
                console.error('Error fetching data: Network response was not ok');
                return;
            }
            const moreData = { message: 'More data fetched successfully' };
            console.log(moreData);
            setTimeout(() => {
                errorOccurred = true; // Simulate an error occurring in the next fetch
                if (errorOccurred) {
                    console.error('Error fetching data: Network response was not ok');
                    return;
                }
                const finalData = { message: 'Final data fetched successfully' };
                console.log(finalData);
                setTimeout(() => {
                    if (errorOccurred) {
                        console.error('Error fetching data: Network response was not ok');
                        return;
                    }
                    const lastData = { message: 'Last data fetched successfully' };
                    console.log(lastData);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

fetchData();