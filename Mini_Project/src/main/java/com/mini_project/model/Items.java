package com.mini_project.model;

import com.mini_project.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull(message = "plaease Enter Items Name")
    @Size(min = 2)
    @NotBlank(message = "Feild should not be Blank")
    private String name;

    @NotNull(message = "plaease Enter Items Name")
    @Size(min = 2)
    @NotBlank(message = "Feild should not be Blank")
    private String description;

    @NotBlank(message = "Feild should not be Blank")
    private Double price;
    @Min(value=10)
    private String image;

    @NotNull(message = "plaease Enter Items Name")
    @NotBlank(message = "Feild should not be Blank")
    private String category;

}
