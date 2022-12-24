class Weapon:
    def __init__(self):
        raise NotImplementedError("Do not create raw Weapon objects.")

    def __str__(self):
        return self.name


class Rock(Weapon):
    def __init__(self):
        self.name = "Rock"
        self.description = "\nA fist-sized rock, suitable for bludgeoning."
        self.damage = 5
        self.value = 1


class Dagger(Weapon):
    def __init__(self):
        self.name = "Dagger"
        self.description = "\nA small dagger with some rust. " \
                           "Somewhat more dangerous than a rock."
        self.damage = 10
        self.value = 20


class RustySword(Weapon):
    def __init__(self):
        self.name = "Rusty sword"
        self.description = "\nThis sword is showing its age, " \
                           "but still has some fight in it."
        self.damage = 20
        self.value = 100


class Desi_Katta(Weapon):
    def __init__(self):
        self.name = "Desi Katta"
        self.description = "\nAs a weapon also known as La tamancha and used frequently by seasoned gangsters,rural farmers and  " \
                           "some daredevil beauties,Desi Katta has been immortalized by Mumbai " \
                           " films and pulp fiction writers in Hindi for decades."
        self.damage = 30
        self.value = 50


class Consumable:
    def __init__(self):
        raise NotImplementedError("Do not create raw Consumable objects.")

    def __str__(self):
        return "{} (+{} HP)".format(self.name, self.healing_value)


class CrustyBread(Consumable):
    def __init__(self):
        self.name = "Crusty Bread"
        self.healing_value = 15
        self.value = 12


class VadaPaav(Consumable):
    def __init__(self):
        self.name = "Vada Paav"
        self.healing_value = 10
        self.value = 10


class HealingPotion(Consumable):
    def __init__(self):
        self.name = "Healing Potion"
        self.healing_value = 50
        self.value = 60
