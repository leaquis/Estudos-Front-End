function a() {
    console.log("executanto a()")
}

function b() {
    console.log("executanto b()")
}

function c() {
    console.log("executanto c()")
    a()
    b()
}

c()
