# import math

# def calculate_sphere_volume(radius):
#     volume = (4/3) * math.pi * (radius ** 3)
#     return volume

# radius = float(input("Enter the radius of the sphere: "))
# volume = calculate_sphere_volume(radius)
# print("The volume of the sphere is:", volume)


def power(base, exponent):
    result = 1
    for _ in range(exponent):
        result *= base
    return result

def calculate_sphere_volume(radius):
    volume = (4/3) * 3.141592653589793 * power(radius, 3)
    return volume

radius = float(input("Enter the radius of the sphere: "))
volume = calculate_sphere_volume(radius)
print("The volume of the sphere is:", volume)
