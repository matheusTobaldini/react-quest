export const paragraphUpperCase = () => {
    const Paragraph = document.getElementById('firstParagraph')
    Paragraph.style.textTransform = 'uppercase'
    Paragraph.style.color = 'red'
}

export const paragraphLowerCase = () => {
    const Paragraph = document.getElementById('firstParagraph')
    Paragraph.style.textTransform = 'lowercase'
    Paragraph.style.color = 'green'
}

const Paragraph = ({ color, id, text }) => {
    return <p id={id} style={{ color: color }}>{text}</p>
}

export default Paragraph