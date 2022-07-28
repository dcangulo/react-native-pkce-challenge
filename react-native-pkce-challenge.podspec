package = JSON.parse(File.read('package.json'))

Pod::Spec.new do |spec|
  spec.name = package['name']
  spec.version = package['version']
  spec.summary = package['description']
  spec.license = package['license']
  spec.homepage = package['homepage']
  spec.author = { package['author']['name'] => package['author']['email'] }
  spec.platforms = { ios: '10.0', osx: '10.13' }
  spec.source = { git: package['repository']['url'], tag: "v#{spec.version}" }
  spec.ios.source_files = 'ios/*.{h,m,mm}', 'cpp/*.{h,cpp}'
  spec.osx.source_files = 'macos/*.{h,m}'
  spec.dependency 'React-Core'
end
