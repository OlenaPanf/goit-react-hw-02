import css from './Description.module.css'

export default function Description() {
    const titleText = "Sip Happens Café";
    const paragraphText = "Please leave your feedback about our service by selecting one of the options below.";
    
    return (
        <div className={css.container}>
            <h1>{titleText}</h1>
            <p>{paragraphText}</p>
        </div>    
    );
}