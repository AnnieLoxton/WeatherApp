test('Does the API work correctly' , async () => {

    const getMethod = await fetch("https://api.openweathermap.org/data/2.5/");
    
    expect(getMethod).toBeDefined();
    
    const conversion = await getMethod.json();
    
    expect(conversion).toBeTruthy();
    })