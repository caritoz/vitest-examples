import {test, expect, vi, beforeEach} from "vitest";

function getCurrentTime(){
    return new Date().toTimeString().slice(0,5)
}

test('time', () => {
    vi.setSystemTime(new Date('2000-1-1 11:00'))
    expect(getCurrentTime()).toBe('11:00')
    vi.useRealTimers()
})

function warnLater(message){
    setTimeout( () => {
        console.log(message)
    }, 2_000)
}
beforeEach(() => {
    vi.useFakeTimers()
})

test('warnLater', async () => {
    const logSpy = vi.spyOn(console, 'log')

    warnLater('2 seconds passed')

    expect(logSpy).to.not.toBeCalled()

    //await new Promise(resolve => setTimeout(resolve, 2_000))

    // vi.advanceTimersByTime(1999)
    // expect(logSpy).to.not.toBeCalled()
    // vi.advanceTimersByTime(1)

    vi.advanceTimersToNextTimer()

    expect(logSpy).toBeCalledWith('2 seconds passed')
})