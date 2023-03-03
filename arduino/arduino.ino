#include <DHT.h>

DHT dht(7, DHT11);
float c;

void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop()   
  delay(4000);

  c = dht.readTemperature();

  Serial.println(c);
}