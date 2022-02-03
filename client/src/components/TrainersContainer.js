import React, {useState, useEffect} from 'react';
import TrainerCard from "./TrainerCard"

export default function TrainersContainer() {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch("/trainers")
        .then(resp => resp.json())
        .then((data)=>{
            setTrainers(data)
        })
    }, [])

    const mappedTrainers = trainers.map((trainer) => 
    <div key={trainer.id}>
        <TrainerCard trainerData={trainer}/>
    </div>
    )

    return (
      <div>
          {mappedTrainers}
      </div>
    );
}
