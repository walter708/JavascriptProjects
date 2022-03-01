(function() {
    function incrementCounter() {
        counter += 1;
    }

    function updateUI() {
        const colors = [
            { name: 'Alizarin', value: '#e74c3c' },
            { name: 'Belizer Hole', value: '#2980b9' },
            { name: 'Emerald', value: '#2ecc71' },
            { name: 'Midnight Blue', value: '#2c3e50' },
            { name: 'Sun Flower', value: '#f1c40f' },
            { name: 'Pumpkin', value: '#d35400' },
        ]

        let result = document.getElementById('resultDiv');
        if (counter > 0) {
            result.innerText = counter;
        }
        result.style.fontSize = counter + "rem";
        let color = counter % colors.length
        result.style.color = colors[color].value

        let colorDiv = document.getElementById('colorDiv');
        colorDiv.innerHTML = '';

        for (i = 0; i < colors.length; i++) {
            let node = document.createElement('div')
            let textNode = document.createTextNode(colors[i].name);
            node.appendChild(textNode);

            node.style.backgroundColor = colors[i].value;
            node.style.width = '15rem';
            node.style.height = '5rem';
            node.style.display = 'inline-block';
            node.style.paddingLeft = '1rem';
            node.style.paddingTop = '1rem';
            node.style.marginRight = '2rem'
            if (color == i) {
                node.style.height = "5rem";

                node.classList.add('selected')
            }

            colorDiv.appendChild(node)

        }
    }
    let counter = 0
    let myButton = document.getElementById('myButton')
    myButton.addEventListener('click', function() {
        incrementCounter();
        updateUI();
    })

    updateUI();

})()