const elements = document.querySelectorAll('.card-grid .card a .card-content .content p')
const limit = 50

for (let p of elements)
{
    const aboveLimit = p.innerText.length > limit
    const dots0rEmpty = aboveLimit ? '...' : ''
    p.innerText = p.innerText.substring(0, limit) + dots0rEmpty
}