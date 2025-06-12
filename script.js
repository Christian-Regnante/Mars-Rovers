const helper_btn = document.querySelector('.click-option')
const popup_box = document.querySelector('.find-wrapper')
const close_mark = document.querySelector('.close-mark')
const introText = document.querySelector('.welcome-txt')
const roversResult = document.querySelector('.rovers-result')
const fhaz_cam = document.getElementById('FHAZ')
const rhaz_cam = document.getElementById('RHAZ')
const nav_cam = document.getElementById('NAV')
const img_holder = document.querySelectorAll('.card-img')
const Cname = document.querySelectorAll('.Cname')
const Fname = document.querySelectorAll('.Fname')
const launch = document.querySelectorAll('.launch')
const landing = document.querySelectorAll('.landing')
const camStatus = document.querySelectorAll('.status')

helper_btn.addEventListener('click', () => {
    popup_box.style.display = 'flex'
    setTimeout(() => {
        popup_box.style.opacity = '1'
    }, 10)
    document.querySelector('.find-wrapper .find-content').style.opacity = '1'
})

close_mark.addEventListener('click', () => {
    popup_box.style.opacity = '0'
    setTimeout(() => {
        popup_box.style.display = 'none'
    }, 1000)
})


fhaz_cam.addEventListener('click', () => {
    introText.style.opacity = '0'
    popup_box.style.opacity = '0'
    setTimeout(() => {
        roversResult.style.opacity = '1'
        popup_box.style.display = 'none'
        introText.style.display = 'none'
        roversResult.style.display = 'flex'
        popup_box.style.top = '0%'
        // helper_btn.style.transform = 'translate(-100px, 0px)'


        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&name=FHAZ&api_key=K7jSIwLYro1rbad9wXOZp2CIuAisVLomwE2HunGm').then(response => response.json())
        .then(data => {
            console.log(data.photos[0].rover.status)
            img_holder.forEach(item => {
                item.style.backgroundImage = `url(${data.photos[0].img_src})`
            })

            Cname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.name
                }
            })
            Fname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.full_name
                }
            })
            launch.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.launch_date
                }
            })
            landing.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.landing_date
                }
            })
            camStatus.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.status
                }
            })
        })
    }, 1000)
})

rhaz_cam.addEventListener('click', () => {
    introText.style.opacity = '0'
    popup_box.style.opacity = '0'
    setTimeout(() => {
        roversResult.style.opacity = '1'
        popup_box.style.display = 'none'
        introText.style.display = 'none'
        roversResult.style.display = 'flex'
        popup_box.style.top = '0%'
        // helper_btn.style.transform = 'translate(-100px)'

        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&name=RHAZ&api_key=K7jSIwLYro1rbad9wXOZp2CIuAisVLomwE2HunGm').then(response => response.json())
        .then(data => {
            console.log(data.photos[0].rover.status)
            img_holder.forEach(item => {
                item.style.backgroundImage = `url(${data.photos[0].img_src})`
            })

            Cname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.name
                }
            })
            Fname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.full_name
                }
            })
            launch.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.launch_date
                }
            })
            landing.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.landing_date
                }
            })
            camStatus.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.status
                }
            })
        })
    }, 1000)
})

nav_cam.addEventListener('click', () => {
    introText.style.opacity = '0'
    popup_box.style.opacity = '0'
    setTimeout(() => {
        roversResult.style.opacity = '1'
        popup_box.style.display = 'none'
        introText.style.display = 'none'
        roversResult.style.display = 'flex'
        popup_box.style.top = '0%'
        // helper_btn.style.transform = 'translate(0px, -100px)'

        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&page=2&name=NAVCAM&api_key=K7jSIwLYro1rbad9wXOZp2CIuAisVLomwE2HunGm').then(response => response.json())
        .then(data => {
            console.log(data.photos[0].rover.status)
            img_holder.forEach(item => {
                item.style.backgroundImage = `url(${data.photos[0].img_src})`
            })

            Cname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.name
                }
            })
            Fname.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].camera.full_name
                }
            })
            launch.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.launch_date
                }
            })
            landing.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.landing_date
                }
            })
            camStatus.forEach(item => {
                for (let i = 0; i < 5; i+5){
                    item.textContent = data.photos[i].rover.status
                }
            })
        })
    }, 1000)
})

