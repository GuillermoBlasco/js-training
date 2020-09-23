# 1.8. Motorbike ABS

## Context

ABS is a security system in cars, motorbikes and other motor-wheeled
vehicles. Its purpose is to prevent the locking of the wheels
when braking. A wheel can be locked by breaks, if the break
action is too strong. When that happen, the wheel goes to a 
full stop, even if the vehicle itself is not. Therefore,
the wheel loses its traction, and compromising
the stability of the vehicle.

ABS measures the speed of the wheel (that is, its turns per second)
with a sensor. When the measurement drops sharply that indicates
that a probable wheel locking is happening or about to happen.
Then, the ABS system releases pressure of the brakes, avoiding 
a wheel lock.

Systems like ABS, and any other in security system, are tuned and
tested thoroughly. This testing not only requires the
actual test that the system works, but also the tuning of
the system to balance the tradeoffs. For example, an 
agressive ABS may release the breaks too early, therefore
reducing the performance of the breaks.

## Problem

We are asked to develop a js function that makes the decision
making of releasing the breaks or not, given the speed of the 
wheels. Engineers want to simulate with some configurations
on many datasets, to see when the break release would happen.
And therefore decide which configuration should be programmed
in the production bike.

The input is an array of revolutions per minute (RPM) of a wheel, representing the 
measurements that the wheel sensor has read. The array may be as long
as needed. Measurements are taken each 150ms, albeit this
is not relevant for the coding.

`[50,55,54,55,40,43]`

The program should read each value of the RPM input, 
and map it to the "should apply ABS or not" answer. Where
a `0` represents "do not apply ABS" and `1` represents "do apply ABS".

`[0,0,0,0,1,0]`

That is that the software has detected that ABS should be applied 
during the 5th read of the sensors.

Also we have the configuration as input. The configuration
is an object with two fields `checkWindow`, 
`dropAbsoluteThreshold` and `dropThershold`.

```
{
 "checkWindow": 5,
 "dropRatioThreshold": 0.5,
 "dropAbsoluteThreshold": 10,
}
```

When a value is checked (the current position), then we have to compare it with 
the value at `checkWindow` positions before (the previous position).
If the current position is less than the previous position then
we have to apply two rules to decide if we should apply ABS:
- the previous position - `dropAbsoluteThreshold` > the current position
- the current position / the previous position < `dropRatioThreshold`, if the current position is not `0`

If any of those two rules apply, then the check is `1`, otherwise
it is `0`.
