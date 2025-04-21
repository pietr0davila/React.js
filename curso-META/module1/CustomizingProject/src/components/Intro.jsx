import '../App.css';
export default function Intro (props) {
    return (
        <section className="intro">
            <h1> {props.content } </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quasi soluta maxime. Error est molestias ut vel reprehenderit, praesentium cum corporis nulla natus magnam eius, laborum dolorum neque officiis nostrum?</p>
            <p className='CTA'>Adquira já!</p>
        </section>
    );
}
