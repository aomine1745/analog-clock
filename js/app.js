const hr = document.getElementById('hr')
const mn = document.getElementById('mn')
const sc = document.getElementById('sc')
const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

function clock () {
	const day = new Date()
	const hh = day.getHours() * 30
	const mm = day.getMinutes() * 6
	const ss = day.getSeconds () * 6

	hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`
	mn.style.transform = `rotateZ(${mm}deg)`
	sc.style.transform = `rotateZ(${ss}deg)`

	let h = day.getHours()
	let m = day.getMinutes()
	let s = day.getSeconds()
	let am = 'AM'

	if ( h > 12) {
		h = h - 12
		am = 'PM'
	}

	h = h < 10 ? '0' + h : h
	m = m < 10 ? '0' + m : m
	s = s < 10 ? '0' + s : s

	hour.innerHTML = h
	minutes.innerHTML = m
	seconds.innerHTML = s
	ampm.innerHTML = am
}

setInterval(clock, 1000)