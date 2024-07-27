from django.db import models

class WaterQuality(models.Model):
    ph = models.FloatField()
    hardness = models.FloatField()
    solids = models.FloatField()
    chloramines = models.FloatField()
    sulfate = models.FloatField()
    conductivity = models.FloatField()
    organic_carbon = models.FloatField()
    trihalomethanes = models.FloatField()
    turbidity = models.FloatField()
    potability = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['ph', 'hardness', 'solids', 'chloramines', 'sulfate', 'conductivity', 'organic_carbon', 'trihalomethanes', 'turbidity']

    def __str__(self):
        return f"WaterQuality(id={self.id}, potability={self.potability})"
