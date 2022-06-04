import './index.css'


export function Percentual(props) {
    var per = (props.xp.porcentagem) * 360 / 100

console.log(per)



    return (
        <>

            <div className='containerPercentual'>

                <div className='contentPercentual'
                    style={{ backgroundImage: `conic-gradient(${props.xp.color} ${per}deg, #4a4a4a 0)` }}>
                    <div className='contentPercentualInterno'>
                        <p>
                            {props.xp.porcentagem + '%'}
                        </p> 
                    </div>

                </div>


            </div>

        </>

    )
}