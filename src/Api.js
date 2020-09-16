const BASE_API = 'http://localhost:8080';

export default {
    
    signIn: async(email, password) => {
        const req = await fetch(`${BASE_API}/auth`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify({email, password})
        });

        const json = req.json();
        return json;
    }
};