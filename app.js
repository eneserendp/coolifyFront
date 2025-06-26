document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const resultDiv = document.getElementById('result');
    if (firstName && lastName) {
        try {
            const response = await fetch('https://api.eneseren.online/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName })
            });
            if (response.ok) {
                const data = await response.json();
                resultDiv.textContent = `Başarıyla kaydedildi: ${data.first_name} ${data.last_name}`;
            } else {
                const error = await response.json();
                resultDiv.textContent = error.error || 'Bir hata oluştu.';
            }
        } catch (err) {
            resultDiv.textContent = 'Sunucuya bağlanılamadı.';
        }
    } else {
        resultDiv.textContent = 'Lütfen tüm alanları doldurun.';
    }
}); 