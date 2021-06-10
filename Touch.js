const Touch = {
    init: (div, prev, next) => {
        let touchendX = 0
        let touchendY = 0
        let startX = 0
        let startY = 0
        div.addEventListener('touchstart', event => {
            startX = event.changedTouches[0].screenX
            startY = event.changedTouches[0].screenY
        }, { passive: true })

        div.addEventListener('touchend', event => {
            const touchendX = event.screenX
            const touchendY = event.screenY
            const diffX = event.changedTouches[0].screenX - startX
            const diffY = event.changedTouches[0].screenY - startY
            const ratioX = Math.abs(diffX / diffY)
            const ratioY = Math.abs(diffY / diffX)
            const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY)

            // Ignore small movements.
            if (absDiff < 30) return;
            if (ratioX > ratioY) {
                if (diffX >= 0) {
                    //console.log('right swipe')
                    clearInterval(timer)
                    next()
                } else {
                    //console.log('left swipe')
                    clearInterval(timer)
                    prev()
                }
            } else {
                if (diffY >= 0) {
                  //console.log('down swipe');
                } else {
                  //console.log('up swipe');
                }
            }
        }, { passive: true }) 
    }
}
    


export { Touch }