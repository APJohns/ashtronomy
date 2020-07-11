import React from "react";

class APOD extends React.Component {
    state = {
        apodData: {}
    }

    componentDidMount() {
        const date = new Date();
        this.getAPOD(date);
    }

    getAPOD(date) {
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        const url = `https://api.nasa.gov/planetary/apod?api_key=HN1wS2vtQ3QxRmUWOwVF7fax5n3MAnZudPQSBmyE&date=${year}-${
                String(month + 1).padStart(2, '0')
            }-${
                String(day).padStart(2, '0')
        }`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.media_type === 'image') {
                    this.setState({
                        apodData: data
                    });
                } else {
                    date.setDate(--day);
                    this.getAPOD(date);
                }
            });
    }

    render() {
        return (
            <a href="https://apod.nasa.gov/apod/astropix.html">
                <img className="apod" src={this.state.apodData.url} alt="Astronomy picture of the day" title={this.state.apodData.title} />
            </a>
        )
    }
}

export default APOD;
