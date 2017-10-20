UPDATE homes
SET country = $2, 
    address = $3, 
    state = $4, 
    city=$5, 
    zip=$6, 
    bathrooms=$7, 
    bedrooms=$8, 
    guests=$9, 
    beds=$10, 
    title=$11, 
    about_body=$12, 
    img=$13
WHERE user_id = $1