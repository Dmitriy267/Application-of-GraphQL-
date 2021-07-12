import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './user.interface';

@Controller('users')
export class UsersController{
	constructor (private usersService: UsersService){}
	@Get()
	getUsers(){
		return this.usersService.findAll();
	}
	@Get(':id_card')
	getUser(@Param()params){
		console.log('Get user ', params.id_card);
		return this.usersService.findOne(Number(params.id_card));
	}
	@Post()
	@HttpCode(204)
	createUser(@Body() user:User){
		console.log('Create user ', user);
		return this.usersService.createUser(user);
	}
	@Put()
	updateUser(@Body() user:User){
		console.log('Update user ', user);
		return this.usersService.updateUser(user);
	}
	@Delete(':id_card')
	deleteUser(@Param()params){
	console.log('Delete user ', params);	
	return this.usersService.remove(Number(params.id_card));
	}
}