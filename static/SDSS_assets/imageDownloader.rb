require "open-uri"
require "pry"
# require "down"


# urls = CSV.read("SDSS_urls.csv")[0]

urls = []

def get_random(min,max)
  rand * (max - min) + min
end

700.times do 
  url = "http://skyserver.sdss.org/dr16/SkyServerWS/ImgCutout/getjpeg?TaskName=Skyserver.Chart.Image&ra=#{get_random(151.02,149.12)}&dec=#{get_random(3.2,1.2)}&scale=#{get_random(0.2,0.3)}&width=1920&height=1080&opt=&query="
  urls << url
end

urls.each_with_index do |url, index|
  open(url) do |image|
      File.open("./images/img#{index}.jpg", "wb") do |file|
        file.write(image.read)
      end
      puts index
    end
end