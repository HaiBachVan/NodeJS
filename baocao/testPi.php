<?php

$x = 3;
$steps = 1000000;
$pi = (1 - 1 / $x);

for ($i = 0; $i < $steps; $i++) {
        $x += 2;
        if ($i % 2) {
                $pi -= 1/$x;
        } else {
                $pi += 1/$x;
        }
}

$pi *= 4;
echo "Pi = ". $pi;

?>
