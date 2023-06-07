var display = document.querySelector('#display');
        function sin() {
        display.value = Math.sin(display.value);
    }
    function cos() {
        display.value = Math.cos(display.value);
    }

    function tan() {
        display.value = Math.tan(display.value);
    }
    function pow() {
        display.value = Math.pow(display.value, 0.5);
    }
    function log() {
        display.value = Math.log(display.value);
    }
    function fact() {
        var i, num, f;
        f = 1
        num = display.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        display.value = f;
    }
    function percentage()
    {
        display.value= (display.value)/100;
    }