import math

def calculate_sphere_volume(radius):
    volume = (4/3) * math.pi * (radius ** 3)
    return volume

radius = float(input("Enter the radius of the sphere: "))
volume = calculate_sphere_volume(radius)
print("The volume of the sphere is:", volume)
