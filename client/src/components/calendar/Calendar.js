
import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { Calendar } from 'react-date-range'
import { format } from 'date-fns/format'
import * as locales from 'react-date-range/dist/locale';
import './calendar.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function CalendarComponent() {


 
/* Seleccion del idioma */
  const nameMapper = {
   
    es: 'Spanish',

  }

/* Sigue siendo la seleccion del idioma */

  const localeOptions = Object.keys(locales)
  .map(key => ({
    value: key,
    label: `${key} - ${nameMapper[key] || ''}`
  }))
  .filter(item => nameMapper[item.value]);

const [locale, setLocale] = useState('es');

/* Esto es la fecha escogida, que hay que enviarla a MONGO*/
const [date, setDate] = useState(null);
console.log(date)

//no consigo darle otro formato de fecha
/* const fecha = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 */


  return (

<div className='calendarInternational'>
  {/* Seleccion del pais */}
  <select className='lenguages'
    style={{ margin: '20px auto' }}
    onChange={e => setLocale(e.target.value)}
    value={locale}
  >
    {localeOptions.map((option, i) => (
      <option value={option.value} key={i}>
        {option.label}
      </option>
    ))}
  </select>

  {/* Caracteristicas del calendario: bloquear dias anteriores, etc. */}
  <Calendar 
    onChange={item => setDate(item)}
    locale={locales[locale]} 
    date = {date} //Esto hace que se quede marcada la fecha   
    minDate = { new Date()} //anterior a hoy no disponible
    dateDisplayFormat	= 'D-MMM-YYYY'
    
    />

{/* //quisiera mostrarlo en pantalla lo que se ha seleccionado

//falta poner hora */}

</div>)





 {/*  <Calendar 
  
  onChange={ handleSelect}



  /> */}




    }



    
  

export default CalendarComponent