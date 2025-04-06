import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, User, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Button } from ".././components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from ".././components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from ".././components/ui/card";
import { Input } from ".././components/ui/input";
import { Textarea } from ".././components/ui/textarea";
import { useToast } from ".././hooks/use-toast";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    date: "March 15, 2024",
    title: "Unforgettable Beach Experience",
    comment: "The beaches in Mirissa were absolutely stunning! Crystal clear water and peaceful surroundings. I saw blue whales on the whale watching tour which was the highlight of my trip.",
    location: "Mirissa Beach",
    helpful: 28,
    category: "beaches"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4,
    date: "February 8, 2024",
    title: "Amazing Cultural Tour",
    comment: "The ancient city of Polonnaruwa exceeded my expectations. The historical sites were well preserved and the tour guide was very knowledgeable. I would recommend spending a full day here.",
    location: "Polonnaruwa",
    helpful: 15,
    category: "culture"
  },
  {
    id: 3,
    name: "Emma Williams",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    date: "April 2, 2024",
    title: "Safari Adventure Like No Other",
    comment: "Yala National Park was incredible! We saw elephants, leopards, crocodiles, and countless birds. Our guide knew exactly where to find the animals. Book the morning safari for the best experience.",
    location: "Yala National Park",
    helpful: 42,
    category: "wildlife"
  },
  {
    id: 4,
    name: "David Patel",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 3,
    date: "January 20, 2024",
    title: "Tea Plantation Tour",
    comment: "Visiting the tea plantations in Nuwara Eliya was beautiful but the weather was quite foggy during our visit. The factory tour was informative and the tea tasting was excellent.",
    location: "Nuwara Eliya",
    helpful: 9,
    category: "nature"
  },
  {
    id: 5,
    name: "Sophia Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 5,
    date: "March 28, 2024",
    title: "Incredible Food Tour in Colombo",
    comment: "The street food tour in Colombo was a highlight of our trip! We tried so many delicious dishes and learned about Sri Lankan spices. The kottu roti was my favorite. Our guide took us to places we would never have found on our own.",
    location: "Colombo",
    helpful: 31,
    category: "food"
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4,
    date: "February 15, 2024",
    title: "Sigiriya Rock Fortress",
    comment: "Climbing Sigiriya was challenging but absolutely worth it for the views from the top. Start early to avoid the heat and crowds. The ancient frescoes were fascinating, and the mirror wall was impressive.",
    location: "Sigiriya",
    helpful: 24,
    category: "culture"
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);
  
  const handleHelpfulClick = () => {
    if (!hasVoted) {
      setHelpfulCount(helpfulCount + 1);
      setHasVoted(true);
    } else {
      setHelpfulCount(helpfulCount - 1);
      setHasVoted(false);
    }
  };
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage src={review.avatar} alt={review.name} />
              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{review.name}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          </div>
          <div>
            <RatingStars rating={review.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3 flex-grow">
        <div className="mb-1 flex items-center justify-between">
          <h4 className="font-semibold">{review.title}</h4>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{review.category}</span>
        </div>
        <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <MessageSquare className="h-3 w-3" />
          <span>Review for {review.location}</span>
        </p>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-1 text-xs ${hasVoted ? 'text-lanka-blue' : 'text-gray-500'}`}
          onClick={handleHelpfulClick}
        >
          <ThumbsUp className="h-3 w-3" />
          <span>Helpful ({helpfulCount})</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

const UserReviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    title: '',
    location: '',
    rating: 5,
    comment: '',
    category: 'beaches'
  });
  
  const { toast } = useToast();
  const reviewsPerPage = 3;
  
  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.comment.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          review.location.toLowerCase().includes(searchQuery.toLowerCase());
                          
    const matchesCategory = selectedCategory === 'all' || review.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const paginatedReviews = filteredReviews.slice(currentPage * reviewsPerPage, (currentPage + 1) * reviewsPerPage);
  const pageCount = Math.ceil(filteredReviews.length / reviewsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage(Math.min(pageCount - 1, currentPage + 1));
  };
  
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review submitted",
      description: "Thank you for sharing your experience! Your review will be published after moderation.",
    });
    setShowForm(false);
    setNewReview({
      title: '',
      location: '',
      rating: 5,
      comment: '',
      category: 'beaches'
    });
  };
  
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            User Reviews & Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Read authentic reviews from travelers who have explored Sri Lanka's wonders
          </p>
        </div>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search reviews..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={selectedCategory === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All
            </Button>
            <Button 
              variant={selectedCategory === 'beaches' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('beaches')}
            >
              Beaches
            </Button>
            <Button 
              variant={selectedCategory === 'culture' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('culture')}
            >
              Culture
            </Button>
            <Button 
              variant={selectedCategory === 'wildlife' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('wildlife')}
            >
              Wildlife
            </Button>
            <Button 
              variant={selectedCategory === 'food' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('food')}
            >
              Food
            </Button>
            <Button 
              variant={selectedCategory === 'nature' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setSelectedCategory('nature')}
            >
              Nature
            </Button>
          </div>
        </div>
        
        {paginatedReviews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {paginatedReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                Showing {currentPage * reviewsPerPage + 1}-{Math.min((currentPage + 1) * reviewsPerPage, filteredReviews.length)} of {filteredReviews.length} reviews
              </p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleNextPage} 
                  disabled={currentPage >= pageCount - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg border">
            <p className="text-gray-500">No reviews found matching your criteria.</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => setShowForm(!showForm)} 
            className="bg-lanka-blue hover:bg-lanka-blue/90"
          >
            {showForm ? 'Cancel' : 'Share Your Experience'}
          </Button>
        </div>
        
        {showForm && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-lanka-blue" />
              <span>Write Your Review</span>
            </h3>
            
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">Title</label>
                  <Input 
                    id="title" 
                    placeholder="Give your review a title"
                    value={newReview.title}
                    onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">Location</label>
                  <Input 
                    id="location" 
                    placeholder="Where did you visit?"
                    value={newReview.location}
                    onChange={(e) => setNewReview({...newReview, location: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`h-6 w-6 ${star <= newReview.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">Category</label>
                  <select
                    id="category"
                    value={newReview.category}
                    onChange={(e) => setNewReview({...newReview, category: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    required
                  >
                    <option value="beaches">Beaches</option>
                    <option value="culture">Culture & Heritage</option>
                    <option value="wildlife">Wildlife</option>
                    <option value="food">Food & Cuisine</option>
                    <option value="nature">Nature & Landscapes</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="comment" className="text-sm font-medium">Your Experience</label>
                <Textarea 
                  id="comment" 
                  placeholder="Share details of your experience..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={5}
                  required
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-lanka-blue hover:bg-lanka-blue/90">
                  Submit Review
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserReviews;