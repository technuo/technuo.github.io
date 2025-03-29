module Jekyll
    class TagGenerator < Generator
      def generate(site)
        site.tags.each_key do |tag|
          site.pages << TagPage.new(site, tag)
        end
      end
    end
  
    class TagPage < Page
      def initialize(site, tag)
        @site = site
        @dir  = 'tags'
        @name = "#{tag}.md"
  
        self.process(@name)
        self.read_yaml(File.join(site.source, '_layouts'), 'tag.html')
        self.data['title'] = tag
        self.data['permalink'] = "/tags/#{tag}/"
      end
    end
  end