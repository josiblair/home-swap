select state, city, title, img from homes
join users on users.id = homes.user_id
where users.id = $1