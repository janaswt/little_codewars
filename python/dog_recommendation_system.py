# 6 kyu Dog recommendation system 

"""
return a set of the dog breeds that are most similar in temper to the given breed. 
"""
def find_similar_dogs(breed):
	# dogs is a dictionary with key as breed and values as adjectives
	results =[]
	scores ={}
	for dog in dogs: #go through each breed name
		if dog != breed: #if not breed
			for adjective in dogs[dog]:
				if adjective in dogs[breed]:
					if dog not in scores:
						scores[dog]=1
					else:
						scores[dog] +=1 
						
	maxScore = max(scores.values()) 
	for dog in scores:
		if scores[dog] == maxScore:
			results.append(dog)
	
	return set(results)
	
