select u.id, h.country, h.address, h.state, h.city, h.zip, h.bedrooms, h.bathrooms, h.guests, h.beds, h.title, h.about_body, h.img  from homes as h
join users as u on u.id = h.user_id
where u.id = $1