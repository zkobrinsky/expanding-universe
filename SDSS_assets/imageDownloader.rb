require "open-uri"
require "csv"
require "pry"
require "down"

urls = CSV.read("SDSS_urls.csv")[0]


# urls.each_with_index do |url, index|
#     open(url) do |image|
#         Down.download(url, destination: "./images")
#       end
# end


urls.each_with_index do |url, index|
  open(url) do |image|
      File.open("./images/img#{index}.jpg", "wb") do |file|
        file.write(image.read)
      end
      puts index
    end
end