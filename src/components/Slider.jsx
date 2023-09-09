function Slider({SliderHandler}) {
    return (
        <input type="range" className="ranger" min="50" max="100" onInput={SliderHandler} dir="ltr" />
    );
}

export default Slider;